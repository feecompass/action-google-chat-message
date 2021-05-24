import * as core from '@actions/core'
import {wait} from './wait'
import {sendMessage} from './message'

async function run(): Promise<void> {
  try {
    const url: string = core.getInput('url', {required: true})
    const message: string = core.getInput('message', {required: true})
    core.debug(`Sending message ${message}`)
    sendMessage(url, message)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
