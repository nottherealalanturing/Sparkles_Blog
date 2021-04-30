import * as React from "react"
import Seo from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>
      <Link to="/">Head Home Bro!</Link>.
    </p>
  </>
)

export default NotFoundPage
