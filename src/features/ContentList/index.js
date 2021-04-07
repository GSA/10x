import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "app/ContentModule";
import Loading from "components/Loading";

const ContentList = ({ type, render, sortKey, sortOrder, error: errorRender }) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.content.list);
  useEffect(() => {
    dispatch(getList({ type }));
  }, [dispatch, type]);

  const { pending, data, error } = list;

  const Error = errorRender;
  const Comp = render;

  if (pending) {
    return <Loading isLoading={pending} />;
  }
  if (error) {
    return Error ? (
      <Error data={error} />
    ) : (
      <h1 className="ContentList__error">{error.message}</h1>
    );
  }
  if (!data.length) {
    return <h1>No content found.</h1>;
  }

  function compareValues(key, order) {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
  
      const varA = (typeof a[key] === "string")
        ? a[key].toLowerCase() : a[key];
      const varB = (typeof b[key] === "string")
        ? b[key].toLowerCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === "desc") ? (comparison * -1) : comparison
      );
    };
  }

  const sortedList = [...data].sort(compareValues(sortKey, sortOrder));

  return sortedList.map((item, i) =>
    Comp ? (
      <Comp key={`ContentList__${type}-${i}`} data={item} />
    ) : (
      <h1 className="ContentList__item" key={`ContentList__${type}-${i}`}>
        {item.title}
      </h1>
    )
  );
};

ContentList.defaultProps = {
  type: "page",
  sortKey: "title",
  sortOrder: "asc"
};

ContentList.propTypes = {
  type: PropTypes.string,
  sortKey: PropTypes.string,
  sortOrder: PropTypes.string,
};

export default ContentList;
