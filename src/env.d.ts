declare module '@pagefind/default-ui' {
    export class PagefindUI {
        constructor(opts: {
            element: string | HTMLElement;
            bundlePath?: string;
            pageSize?: number;
            resetStyles?: boolean;
            showImages?: boolean;
            showSubResults?: boolean;
            excerptLength?: number;
            showEmptyFilters?: boolean;
            debounceTimeoutMs?: number;
            autofocus?: boolean;
            translations?: Record<string, string>;
            autofocus?: boolean,
            sort?: any,
        });
    }
}
