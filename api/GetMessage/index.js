module.exports = async function (context, req) {
    context.res = {
      body: {
        text: "Hello World from the NZ - API"
      }
    };
  };