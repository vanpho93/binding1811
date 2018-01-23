export interface Word {
    en: string;
    vn: string;
    isMemorized: boolean;
}

export type ShowMode = 'SHOW_ALL' | 'SHOW_MEMORIZED' | 'SHOW_FORGOT';
