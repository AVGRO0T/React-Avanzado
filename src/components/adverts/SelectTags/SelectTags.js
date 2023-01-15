import React, { useEffect, useState } from 'react';

 
import { CheckboxGroup } from '../../common';

import { tagsLoad} from '../../../store/actions';
import { useDispatch, useSelector} from 'react-redux';
import { getTagsSelector } from '../../../store/selectors';



export const GetTag = () => {
  const dispatch = useDispatch();
  const tags = useSelector (getTagsSelector)
  useEffect (() => {  
      dispatch(tagsLoad());
  },[]);
  return tags;
}

function SelectTags(props) {
 const tags = GetTag();
  return <CheckboxGroup options={tags} {...props} />;
  
}

export default SelectTags;
