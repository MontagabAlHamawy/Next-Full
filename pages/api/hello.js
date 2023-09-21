import ConnectDB from "@/utils/ConnectDB"



export default function handler(req, res) {
  res.status(200).json({ name: 'Hello in our API' })
}
