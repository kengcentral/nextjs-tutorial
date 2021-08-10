import {useRouter} from 'next/router'

const DynamicPage = ({data}) => {
    const route = useRouter()
    const {id} = route.query
    
    return (<div>
        <div>Id: {id}</div>
        <div>
            {JSON.stringify(data)}
        </div>
    </div>)
}

export const getStaticPaths = async () => {
    return {
        paths: [
            {params: {id:'1'}},
            {params: {id:'2'}}
        ],
        fallback: false
    }
}

export const getStaticProps = async ({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
    const data = await res.json()

    return {
        props: {
            data
        }
    }
}

// export const getServerSideProps = async ({params}) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
//     const data = await res.json()

//     return {
//         props: {
//             data
//         }
//     }
// }

export default DynamicPage