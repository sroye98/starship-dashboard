import { ApiStatus } from "@/enums/apiStatus";

export type ApiResponse<Data extends object> = {
    status: ApiStatus,
    error: string | Error,
    data: Data | null | undefined
}