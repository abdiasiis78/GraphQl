import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone"

// types
import {typesDefs} from './schema.js'

// db
import db from './_db.js'

const resolvers = {
    Query: {
        games(){
            return db.games
        },
        authors(){
            return db.authors
        },
        reviews(){
            return db.reviews
        }

    }
}


const server = ApolloServer({
     typesDefs,
     resolvers

})

const { url } = await startStandaloneServer(server,{
    listen: {port: 4000}
} )

console.log(`server is redy at port `, 4000);