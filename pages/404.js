import {React, useEffect} from 'react'
import Head from "next/head"
import Link from "next/link";
import LoadingBar from '../components/LoadingBar';
export default function CustomError() {
    useEffect(() => {
        document.querySelector("body").className = "";
       },[])
  return (
    <>
     <Head>
        <title>404 | Not Found</title>
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_IMAGESPATH}/favicon.ico`} />
      </Head>
      <LoadingBar/>
 <div className="error_page">
    <p>404 | Not Found</p>
    <Link href="/">
    <button>Go Back To Home</button>
    </Link>
 </div>
    </>
  )
}
