declare global {
  interface PluginRegistry {
    MongoDBMobilePlugin?: MongoDBMobilePluginPlugin;
  }
}

export interface MongoDBMobilePluginPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
