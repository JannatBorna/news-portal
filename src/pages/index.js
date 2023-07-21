import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
// import Banner from "@/components/UI/Banner";
import AllNews from "@/components/UI/AllNews";
import { useGetNewsesQuery } from "@/redux/api/api";
import dynamic from 'next/dynamic'


const HomePage = ({allNews}) => {

const DynamicBanner = dynamic(() => import('@/components/UI/Banner'), {
  loading: () => <h1>Loading...</h1>,
  ssr: false,
})

  // console.log(allNews)
  const {data, isLoading, isError, error} = useGetNewsesQuery()
  console.log(data)
  return (
    <>
      <Head>
        <title>PH-News Portal</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Banner /> */}
      <DynamicBanner />

      <AllNews allNews={allNews}/> 
      {/* <AllNews allNews={data}/> */}
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};


// data fatching
//export const getStaticProps = async () => {
export const getServerSideProps = async () => {
  //  const res = await fetch("http://localhost:3000/news");
  const res = await fetch("http://localhost:3000/api/news");
  const data = await res.json();
  // console.log(data);
  return {
    props:{
      // allNews: data, //এই data থেকে সরাসরি data আকারে আসতেছে না। 
      allNews: data.data,//একটা object এর মধ্যে data নামক একটা প্রোপার্টি তার মধ্যে news তাই data.data 
    },
    // revalidate: 10,
  };
};