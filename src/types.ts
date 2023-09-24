export interface SingleBook {
  id: string;
  title: string;
  description: string;
  buyLink: string;
  publishDate: string;
  previewLink: string;
  image: string;
  authors: string[];
  bookLink: string;
  isLiked: boolean;
}

export namespace Api {
  export namespace Book {
    export namespace Single {
      export type Request = string;
      export interface Response {
        status: number;
        data: [];
      }
    }
    export namespace List {
      export type Request = string;
      export interface Response {
        status: number;
        data: {
          items: SingleBook[];
        };
      }
    }
  }
}
