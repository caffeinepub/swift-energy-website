import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface News {
    title: string;
    time: Time;
    description: string;
}
export type Time = bigint;
export interface backendInterface {
    getAllNews(): Promise<Array<News>>;
    publishNews(title: string, description: string, timestamp: Time): Promise<void>;
    removeNews(title: string): Promise<void>;
}
