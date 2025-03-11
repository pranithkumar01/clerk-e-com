// import React from 'react'
// import { UserProfile } from '@clerk/nextjs'
// import { auth, currentUser } from '@clerk/nextjs/server'
// // import { Redirect } from 'next'
// import { redirect } from 'next/dist/server/api-utils'


// async function Profile() {
//     const userId = await auth()
//     const isAuth= !!userId
//     const user= await currentUser()

//     if(!isAuth){
//         redirect("/")
//     }

//   return (
//     <div className='flex flex-col items-center justify-center h-full mt-8'>
//       <h1 className='text-2xl'>{user?.username}</h1>
//       <UserProfile/>
//     </div>
//   )
// }

// export default Profile


// import React from 'react'
// import { useRouter } from 'next/router'
// import { UserProfile } from '@clerk/nextjs'
// import { auth, currentUser } from '@clerk/nextjs/server'

// async function Profile() {
//   const router = useRouter()
//   const userId = await auth()
//   const isAuth = !!userId
//   const user = await currentUser()

//   React.useEffect(() => {
//     if (!isAuth) {
//       router.push('/')
//     }
//   }, [isAuth, router])

//   return (
//     <div className='flex flex-col items-center justify-center h-full mt-8'>
//       <h1 className='text-2xl'>{user?.username}</h1>
//       <UserProfile />
//     </div>
//   )
// }

// export default Profile

// "use client"

// import React from 'react'
// import { useRouter } from 'next/navigation'
// import { UserProfile } from '@clerk/nextjs'
// import { auth, currentUser } from '@clerk/nextjs/server'

// async function Profile() {
//   const router = useRouter()
//   const userId = await auth()
//   const isAuth = !!userId
//   const user = await currentUser()

//   React.useEffect(() => {
//     if (!isAuth) {
//       router.push('/')
//     }
//   }, [isAuth, router])

//   return (
//     <div className='flex flex-col items-center justify-center h-full mt-8'>
//       <h1 className='text-2xl'>{user?.username}</h1>
//       <UserProfile />
//     </div>
//   )
// }

// export default Profile

import { auth, currentUser } from '@clerk/nextjs/server'

export async function getServerSideProps() {
  const userId = await auth()
  const isAuth = !!userId
  const user = await currentUser()

  if (!isAuth) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      user,
    },
  }
}




