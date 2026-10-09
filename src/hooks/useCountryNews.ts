import { useEffect, useState } from 'react';

export type NewsCategory = 'politics' | 'economy' | 'society' | 'diplomacy' | 'climate-energy' | 'security' | 'cooperation';
export type NewsSourceType = 'official' | 'state' | 'national' | 'regional' | 'international' | 'research';

export interface NewsSource {
  publisher: string;
  title: string;
  url: string;
  type: NewsSourceType;
  language: string;
  date: string;
  evidence: string;
}

export interface NewsItem {
  id: string;
  date: string;
  headline: string;
  summary: string;
  category: NewsCategory;
  topics: string[];
  confidence: 'confirmed';
  translated: boolean;
  note: string;
  sources: NewsSource[];
}

export interface CountryNews {
  iso3: string;
  country: string;
  period: { from: string; to: string };
  generatedAt: string;
  method: string;
  items: NewsItem[];
}

export type NewsState = { status: 'loading' } | { status: 'none' } | { status: 'ready'; news: CountryNews };

/** Loads the weekly feed public/data/news/{ISO3}.json. A missing file means: no feed for this country yet. */
export function useCountryNews(iso3: string): NewsState {
  const [state, setState] = useState<NewsState>({ status: 'loading' });
  useEffect(() => {
    let cancelled = false;
    setState({ status: 'loading' });
    fetch(`${import.meta.env.BASE_URL}data/news/${iso3}.json`, { cache: 'no-cache' })
      .then(async (r) => {
        if (!r.ok) throw new Error(String(r.status));
        const j = (await r.json()) as CountryNews;
        if (!Array.isArray(j.items)) throw new Error('bad feed');
        return j;
      })
      .then((news) => !cancelled && setState({ status: 'ready', news }))
      .catch(() => !cancelled && setState({ status: 'none' }));
    return () => {
      cancelled = true;
    };
  }, [iso3]);
  return state;
}
