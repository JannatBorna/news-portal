import React from 'react';
import RootLayout from "@/components/Layouts/RootLayout";
import { CalendarOutlined, CommentOutlined, ProfileOutlined } from '@ant-design/icons';

import { Col, Row } from 'antd';
import Image from 'next/image';

const NewsDetailPage = ({news}) => { 
    return (
        <div>
             <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      <Col className="gutter-row" span={12}>
        <div style={{margin: "20px"}}>
            <Image
            src={news?.image_url}
            width={500}
            height={300}
            responsive
            alt='news-image'
            />
            
        </div>
      </Col>
      <Col className="gutter-row" span={12}>
        <div style={{margin: "20px"}}>
        <h1 style={{fontSize: "30px"}}>{news?.title} </h1>
                   <div className='line'
                   style={{
                        height:"5px",
                        margin:"20px 0",
                        background:"#000",
                        width:"100%",
                   }}
                   ></div>

                        <p
                        style={{
                            display:"flex",
                            justifyContent:"space-between",
                            width:"100%",
                            color:"gray",
                            margin:"10px 0px",

                        }}
                        >
                        <span>
                            <CalendarOutlined /> {news?.release_date}
                        </span>

                        <span>
                            <CommentOutlined /> {news?.comment_count} comment
                        </span>

                        <span>
                            <ProfileOutlined /> {news?.category}
                        </span>
                        </p>
                        <p style={{fontSize: "20px"}}>
                         {news?.description}
                         </p>

                        <p 
                        style={{
                            fontSize: "15px",
                            fontWeight: "200"


                    }}>
                        <span>
                       author: {news?.author}
                   </span>
                       
                         </p>

        </div>
      </Col>
    </Row>
        </div>
    );
};

export default NewsDetailPage;

NewsDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getStaticPaths =async () => {
    //    const res = await fetch("http://localhost:2000/news");
    //    const newses = await res.json();

    //    const paths = newses.map((news) => ({
    //    params: { newsId: news.id },
    //    }))
    //    return{
        // paths, fallback:false
    //    };
// }

export const getServerSideProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:2000/news/${params.newsId}`);
    const data = await res.json();
    console.log(data)

    return{
        props: {
           news: data,
        }
    }
}