import { getQuery } from "h3"
import { update } from "../lib/firestore"

export default defineEventHandler(async (event) => {
  try {
    const { col, id } = getQuery(event)
    const body = await readBody(event)
    const docRef = await update(col, id, body)

    return { result: docRef }
  } catch (error: any) {
    return { error: error.message }
  }
})