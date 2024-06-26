import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";
import CardItem from "../Components/CardItem";

import { continents, prices } from "../utils/filterData";

import CheckBox from "../Components/CheckBox";
import SearchInp from "../Components/SearchInp";

function MainPage() {
  const [products, setProducts] = useState([]);

  const limit = 4;
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [filters, setFilters] = useState({
    continents: [],
    price: [],
  });

  const [searchForm, setSearchForm] = useState();

  const fetchProducts = async ({
    skip,
    limit,
    loadMore = false,
    filters = {},
  }) => {
    const params = {
      skip,
      limit,
      filters,
    };
    try {
      const res = await axiosInstance.get("/products", { params });

      console.log(res.data.products);

      if (loadMore) {
        setProducts([...products, ...res.data.products]);
      } else {
        setProducts(res.data.products);
      }
      setHasMore(res.data.hasMore);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts({ skip, limit });
  }, []);

  function handelLoadMore() {
    const body = {
      skip: skip + limit,
      limit,
      loadMore: true,
      filters,
    };
    fetchProducts(body);
    setSkip(Number(skip) + Number(limit));
  }

  function handlefilters(newFilteredData) {
    console.log(newFilteredData);

    const newFliters = { ...filters };

    newFliters["continents"] = newFilteredData;

    showFilterResult(newFliters);
    setFilters(newFliters);
  }

  function showFilterResult(filters) {
    console.log(filters);
    const body = {
      skip: 0,
      limit,
      filters,
    };
    fetchProducts(body);
    setSkip(0);
  }

  function handleSearch(e) {
    console.log(e.target.value);
    setSearchForm(e.target.value);
  }

  return (
    <section>
      <h2>글리스트</h2>
      {filters.continents}
      {/* filter  */}
      <div className="flex gap-3 mb-4">
        <div className="w-full px-2">
          <h3>지역선택</h3>
          {/* <div className="flex gap-4 flex-wrap">
            <div className="w-[20%] bg-slate-200">text</div>
            <div className="w-[20%] bg-slate-200">text</div>
            <div className="w-[20%] bg-slate-200">text</div>
            <div className="w-[20%] bg-slate-200">text</div>
            <div className="w-[20%] bg-slate-200">text</div>
            <div className="w-[20%] bg-slate-200">text</div>
            <div className="w-[20%] bg-slate-200">text</div>
            <div className="w-[20%] bg-slate-200">text</div>
          </div> */}

          {/* <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
            <div className="w-[100%] bg-slate-200">text</div>
            <div className="w-[100%] bg-slate-200">text</div>
            <div className="w-[100%] bg-slate-200">text</div>
            <div className="w-[100%] bg-slate-200">text</div>
            <div className="w-[100%] bg-slate-200">text</div>
            <div className="w-[100%] bg-slate-200">text</div>
          </div> */}
          <div>
            <CheckBox
              continents={continents}
              checkedContinents={filters.continents}
              onFilters={(filters) => {
                handlefilters(filters);
              }}
            />
          </div>
        </div>
        {/* <div className="w-1/2">radio</div> */}
      </div>

      {/* search */}
      <div className="flex justify-end mb-3">
        <SearchInp searchForm={searchForm} onSearch={handleSearch} />
      </div>

      {/* products  */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-3">
        {products &&
          products.map((product) => {
            return <CardItem product={product} key={product._id} />;
          })}
      </div>

      {/* more  */}

      {hasMore && (
        <div className="flex justify-center ">
          <button
            onClick={handelLoadMore}
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-400"
          >
            더보기
          </button>
        </div>
      )}
    </section>
  );
}

export default MainPage;
