import client from "@/api/api";
import { gql } from "@apollo/client";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query getAllMembers {
        getAllMembers {
          id
          name
          position
        }
      }
    `,
  });
  
  return {
    props: {
      articles: data.getAllMembers,
    },
  };
}

export default function Articles() {
  return (
    <main></main>
  );
}
