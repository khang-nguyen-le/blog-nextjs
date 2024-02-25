const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "khangln210",
        mongodb_password: "UO0WzA8rnPjvChTY",
        mongodb_clustername: "cluster0",
        mongodb_database: "development",
      },
    };
  }

  return {
    env: {
      mongodb_username: "khangln210",
      mongodb_password: "UO0WzA8rnPjvChTY",
      mongodb_clustername: "cluster0",
      mongodb_database: "production",
    },
  };
};
