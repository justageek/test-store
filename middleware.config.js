module.exports = {
  integrations: {
    ct: {
      location: '@vue-storefront/commercetools-api/server',
      configuration: {
        api: {
          uri: ' https://api.us-central1.gcp.commercetools.com',
          authHost: 'https://auth.us-central1.gcp.commercetools.com',
          projectKey: 'core-commerce-store',
          clientId: 'OtzCSeJTLJvBNw4gGZhGsaol',
          clientSecret: 'WEzf74lpcdmj83QM0Hyb5g4KgFo9tZI6',
          scopes: [
            'create_anonymous_token:core-commerce-store',
            'view_categories:core-commerce-store',
            'view_published_products:core-commerce-store',
            'view_stores:core-commerce-store',
            'manage_my_profile:core-commerce-store',
            'manage_my_orders:core-commerce-store',
            'manage_my_payments:core-commerce-store',
            'manage_my_shopping_lists:core-commerce-store'
          ]
        },
        serverApi: {
          clientId: 'pXuyph7b0mfR-R7Lt6ZSezx4',
          clientSecret: 'r4sNskWcbAut8LXdbreFrbZffIGBgihcs',
          scopes: [
            'manage_customers:core-commerce-store',
            'manage_products:core-commerce-store'
          ]
        },
        currency: 'USD',
        country: 'US',
        languageMap: {
          en: ['en', 'de'],
          de: ['de', 'en']
        }
      }
    }
  }
};
