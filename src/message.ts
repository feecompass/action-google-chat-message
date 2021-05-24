import * as core from '@actions/core'
import * as github from '@actions/github'
import * as Webhooks from '@octokit/webhooks'
import axios from 'axios'

export async function sendMessage(url: string, msgText: string): Promise<void> {
  core.info(github.context.eventName)
  core.info(JSON.stringify(github.context.payload))
	let body = { text: msgText }

  const response = await axios.post(url, body)
  if (response.status !== 200) {
    throw new Error(
      `Google Chat notification failed. response status=${response.status}`
    )
  }
}
