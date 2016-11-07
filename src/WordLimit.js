import React from 'react'

export default function WordLimit(props){
	if (props.children.length > props.limit)
      return <span title={props.children}>{props.children.substring(0,props.limit)+'...'}</span>;
   else
      return <span title={props.children}>{props.children}</span>;
}