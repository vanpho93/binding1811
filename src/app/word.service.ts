import { Injectable } from '@angular/core';
import { Word } from './types';

@Injectable()

export class WordService {
    getAllWords(): Promise<Word[]> {
        return Promise.resolve([
            { en: 'One', vn: 'Mot', isMemorized: true },
            { en: 'Two', vn: 'Hai', isMemorized: false },
        ]);
    }
}
