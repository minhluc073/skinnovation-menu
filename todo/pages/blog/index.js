import React, { useState, useEffect } from 'react';
import Paginator from 'react-hooks-paginator';
import { useRouter } from 'next/router';

import BlogSidebar from "../../components/Blog/BlogSidebar";
import LayoutFour from "../../components/Layout/LayoutFour";
import InstagramTwo from "../../components/Sections/Instagram/InstagramTwo";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import BlogContent from "../../components/Blog/BlogContent";

import ConnectionInstance from '@services/connection-instance';
import { getAllBlogs } from '@context/defines';
import { useAppContext } from '@context/app-context';

const pageLimit = 7;

const Blog = (props) => {
  const [state, dispatch] = useAppContext();
  const { data, total } = state.blog;
  const router = useRouter();
  const search = router.query.search;
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  useEffect(async () => {
    let res;
    if (search) {
      res = await ConnectionInstance.get('blog', { params: { title_like: search || '', _limit: pageLimit } });
    } else {
      res = await ConnectionInstance.get('blog', { params: { _limit: pageLimit } });
    }
    dispatch({ type: getAllBlogs, payload: { data: res.data, total: res.headers['x-total-count'] } });
  }, [search]);

  useEffect(() => {
    dispatch({ type: getAllBlogs, payload: { data: props.data, total: props.total } });
  }, []);

  return (
    <LayoutFour title="Blog">
      <Breadcrumb title="Blog">
        <BreadcrumbItem name="Home" />
        <BreadcrumbItem name="Blog" current />
      </Breadcrumb>
      <div className="blog">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-3">
              <BlogSidebar limit={5} popularPostData={data} />
            </div>
            <div className="col-12 col-lg-9">
              <BlogContent offset={offset} search={search} data={data} />
              <Paginator
                pageContainerClass="paginator"
                totalRecords={Number(total)}
                pageLimit={pageLimit}
                pageNeighbours={2}
                setOffset={setOffset}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
      <InstagramTwo />
    </LayoutFour>
  );
};

export async function getStaticProps(context) {
  const blogRes = await ConnectionInstance.get('blog', { params: { _limit: pageLimit } });

  const data = blogRes.data;
  const total = blogRes.headers['x-total-count'];

  return {
    props: {
      data,
      total,
    },
  };
}

export default Blog;
