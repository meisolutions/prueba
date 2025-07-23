export interface User {
    page?: number;  //null 
    per_page: number;
    total: number;
    total_pages: number;
    data: DataList[],
    support: {
        url: string;
        text: string;
    }
}

export interface DataList {
    data: MetaData
}

export interface MetaData {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}
