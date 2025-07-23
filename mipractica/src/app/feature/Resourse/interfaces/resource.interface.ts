export interface Resource {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: ResourceData[];
  support: ResourceSupport;
}

export interface ResourceData {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export interface ResourceSupport {
  url: string;
  text: string;
} 