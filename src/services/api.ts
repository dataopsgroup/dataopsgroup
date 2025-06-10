import axios from 'axios';

/**
 * Generic API response interface for HTTP requests.
 */
export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

/**
 * API service for making HTTP requests with type safety.
 */
export const api = {
  /**
   * Makes a GET request to the specified URL and returns a typed response.
   * @param url The URL to request.
   * @returns A promise resolving to an ApiResponse of type T.
   */
  async get<T>(url: string): Promise<ApiResponse<T>> {
    const response = await axios.get<T>(url);
    return {
      data: response.data,
      status: response.status,
      message: response.statusText,
    };
  },
  // Add other HTTP methods as needed (post, put, delete, etc.)
}; 