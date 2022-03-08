import { AxiosResponse } from 'axios';

export type CommonResponseType<T = {}> = Promise<AxiosResponse<T>>;
