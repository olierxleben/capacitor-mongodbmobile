import { WebPlugin } from '@capacitor/core';
import { MongoDBMobilePluginPlugin } from './definitions';

export class MongoDBMobilePluginWeb extends WebPlugin implements MongoDBMobilePluginPlugin {
  constructor() {
    super({
      name: 'MongoDBMobilePlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const MongoDBMobilePlugin = new MongoDBMobilePluginWeb();

export { MongoDBMobilePlugin };
