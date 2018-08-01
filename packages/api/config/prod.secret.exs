use Mix.Config

# In this file, we keep production configuration that
# you'll likely want to automate and keep away from
# your version control system.
#
# You should document the content of this
# file or create a script for recreating it, since it's
# kept out of version control and might be hard to recover
# or recreate for your teammates (or yourself later on).
config :api, ApiWeb.Endpoint,
  secret_key_base: "9lOKWYZ3rEtA62XrgV1sFEmhv5FagK/qEAeR0ZVRIozxa/75lc56C6prsqBrO6e9"

# Configure your database
config :api, Api.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "api_prod",
  pool_size: 15
