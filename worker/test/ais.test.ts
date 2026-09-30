import { test } from 'node:test';
import assert from 'node:assert/strict';
import { applyMessage, areaOf, kindFromShipType, prune, subscription, toRows, type Vessel } from '../src/ais.ts';

const pos = (mmsi: number, lat: number, lon: number, extra: Record<string, unknown> = {}) => ({
  MessageType: 'PositionReport',
  MetaData: { MMSI: mmsi, ShipName: 'TEST VESSEL ', latitude: lat, longitude: lon, ...extra },
  Message: { PositionReport: { Sog: 12.4, Cog: 86.7, TrueHeading: 87 } },
});

test('areas cover the three chokepoints', () => {
  assert.equal(areaOf(26.5, 56.4), 'gulf'); // Hormuz
  assert.equal(areaOf(12.6, 43.4), 'red-sea'); // Bab el-Mandeb
  assert.equal(areaOf(2.5, 101.5), 'malacca');
  assert.equal(areaOf(50, 8), undefined);
});

test('position reports inside an area are stored, outside ignored', () => {
  const s = new Map<number, Vessel>();
  assert.equal(applyMessage(s, pos(1, 26.5, 56.4), 1000), true);
  assert.equal(applyMessage(s, pos(2, 50, 8), 1000), false);
  assert.equal(s.size, 1);
  assert.equal(s.get(1)!.name, 'TEST VESSEL');
  assert.equal(s.get(1)!.sog, 12.4);
});

test('capitalised MetaData coordinates are accepted', () => {
  const s = new Map<number, Vessel>();
  const m = { MessageType: 'PositionReport', MetaData: { MMSI: 5, Latitude: 12.6, Longitude: 43.4 }, Message: { PositionReport: {} } };
  assert.equal(applyMessage(s, m), true);
});

test('not-available speed and course become null', () => {
  const s = new Map<number, Vessel>();
  const m = pos(3, 26, 55);
  (m.Message.PositionReport as Record<string, number>).Sog = 102.3;
  (m.Message.PositionReport as Record<string, number>).Cog = 360;
  applyMessage(s, m);
  assert.equal(s.get(3)!.sog, null);
  assert.equal(s.get(3)!.cog, null);
});

test('static data enriches known vessels only', () => {
  const s = new Map<number, Vessel>();
  const sd = (mmsi: number) => ({ MessageType: 'ShipStaticData', MetaData: { MMSI: mmsi }, Message: { ShipStaticData: { Type: 84, Destination: 'FUJAIRAH', Name: 'X' } } });
  assert.equal(applyMessage(s, sd(9)), false);
  applyMessage(s, pos(9, 26, 55));
  assert.equal(applyMessage(s, sd(9)), true);
  assert.equal(kindFromShipType(s.get(9)!.type), 'tanker');
  assert.equal(toRows(s, 'all')[0][8], 'FUJAIRAH');
});

test('prune removes stale vessels and rows filter by area', () => {
  const s = new Map<number, Vessel>();
  applyMessage(s, pos(1, 26.5, 56.4), 0);
  applyMessage(s, pos(2, 2.5, 101.5), 100_000);
  assert.equal(toRows(s, 'gulf', 100_000).length, 1);
  assert.equal(prune(s, 50_000, 100_000), 1);
  assert.equal(s.size, 1);
});

test('ship type mapping', () => {
  assert.equal(kindFromShipType(70), 'cargo');
  assert.equal(kindFromShipType(60), 'passenger');
  assert.equal(kindFromShipType(30), 'other');
  assert.equal(kindFromShipType(undefined), 'unknown');
});

test('subscription uses lat/lon boxes', () => {
  const sub = subscription('k');
  assert.equal(sub.APIKey, 'k');
  assert.equal(sub.BoundingBoxes.length, 3);
  assert.deepEqual(sub.BoundingBoxes[0], [[22.0, 47.5], [30.5, 60.5]]);
});
