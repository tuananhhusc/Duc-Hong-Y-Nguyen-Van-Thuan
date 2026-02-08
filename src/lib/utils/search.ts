import Fuse from 'fuse.js';
import { type CorpusEntry } from '@/lib/data/corpus';

export function searchCorpus(query: string, corpus: CorpusEntry[]) {
    if (!query) return corpus;

    const fuse = new Fuse(corpus, {
        keys: ['vanBan', 'tuaChuong', 'chuDeLinhDao'],
        threshold: 0.4,
        includeScore: true,
        ignoreLocation: true,
    });

    return fuse.search(query).map(result => result.item);
}
