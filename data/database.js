import mongoose from "mongoose"

const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_URI).then(()=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log(err)
})
}
export default connectDatabase;