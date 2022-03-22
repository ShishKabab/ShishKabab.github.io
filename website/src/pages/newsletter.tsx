import React from "react"
import { NEWSLETTER_FORM_URL } from "../features/newsletter/constants"

export default class NewsletterPage extends React.Component {
    componentDidMount() {
        window.location.href = NEWSLETTER_FORM_URL
    }

    render() {
        return <div></div>
    }
}
