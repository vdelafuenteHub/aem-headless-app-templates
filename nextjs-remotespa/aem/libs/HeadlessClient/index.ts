import AEMHeadless from '@adobe/aem-headless-client-js';

class HeadlessClient {
  private _host;
  private _client;

  constructor({
    serviceURL,
    endpoint,
    auth,
    options = {},
  }: {
    serviceURL: string;
    endpoint?: string;
    auth?: string | string[];
    options?: Partial<{
      [key: string]: unknown;
    }>;
  }) {
    const { headers = {}, fetch: fetchProp = fetch } = options;

    this._host = serviceURL;

    this._client = new AEMHeadless({
      serviceURL,
      endpoint,
      auth,
      headers,
      fetch: fetchProp,
    });
  }

  get host(): string {
    return this._host;
  }

  get client(): typeof AEMHeadless {
    return this._client;
  }
}

export default HeadlessClient;
