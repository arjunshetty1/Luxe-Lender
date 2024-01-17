import { request, gql } from "graphql-request";

export const product = async () => {
  const document = gql`
    query MyQuery {
      products {
        id
        price
        productName
        categories
        image {
          id
          url
        }
      }
    }
  `;
  const response = await request(
    "https://api-ap-south-1.hygraph.com/v2/clr3vfiglcadr01waj5mgj7xh/master",
    document
  );
  return response;
};

export const createOrder = async (send) => {
  const mutationQuery =
    gql`
    mutation MyMutation {
      createOrderDetail(
        data: {productName: "` +
    send.productName +
    `", productPrice: ${send.productPrice}, productId: "` +
    send.productId +
    `", product: {connect: {id: "` +
    send.productId +
    `"}}}
      ) {

        id
        
        }
    }
  `;
  const response = await request(
    "https://api-ap-south-1.hygraph.com/v2/clr3vfiglcadr01waj5mgj7xh/master",
    mutationQuery
  );

  if (response.errors) {
    console.log(response.errors);
  }
  return response;
};
