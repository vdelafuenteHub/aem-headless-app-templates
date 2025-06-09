import { ModelClient } from '@adobe/aem-spa-page-model-manager';

class CustomModelClient extends ModelClient {
  private _options: RequestInit;

  constructor({ host, options = {} }: { host: string; options?: RequestInit }) {
    super(host);
    this._options = options;
  }

  fetch(modelPath: string) {
    if (!modelPath) {
      return Promise.reject(
        new Error(`Fetching model rejected for path: ${modelPath}`)
      );
    }

    const url = `${this.apiHost}${modelPath}`;

    return fetch(url, {
      credentials: 'same-origin',
      ...this._options,
    })
      .then(res => {
        if (200 <= res.status && res.status < 300) {
          return res.json();
        }

        return Promise.reject(res);
      })
      .catch(Promise.reject);
  }
}

export default CustomModelClient;
