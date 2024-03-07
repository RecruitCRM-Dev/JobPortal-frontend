import { render, screen } from '@testing-library/vue'
import LoginForm from '@/views/Auth/CommonLogin.vue'
import { describe, expect, it, vi } from 'vitest'
import { useRoute, useRouter } from 'vue-router'
import * as matchers from '@testing-library/jest-dom/matchers'
import axios from 'axios'
import userEvent from '@testing-library/user-event'
import { useStore } from 'vuex'

expect.extend(matchers)
vi.mock('axios')
vi.mock('vuex')
vi.mock('vue-router')
vi.mocked(axios.get).mockResolvedValue({})
vi.mocked(useRoute).mockReturnValue({
  query: {}
})

const mockDispatch = vi.fn().mockResolvedValue('success')

const mockGetters = {
  isLoggedIn: true // Mock your getter here
}

vi.mocked(useStore).mockReturnValue({
  getters: mockGetters, // Inject the mocked getters
  dispatch: mockDispatch
})

const mockRouterPush = vi.fn()

vi.mocked(useRouter).mockReturnValue({
  replace: () => {},
  push: mockRouterPush // Inject the mocked router.push
})

const setup = async () => {
  render(LoginForm, {
    global: {
      stubs: {
        'v-icon': true,
        'router-link': true
      }
    }
  })
}

describe('Login', () => {
  it.only('has heading with info about the project', async () => {
    await setup()
    const heading = screen.getByRole('heading', {
      name: 'Login'
    })
    expect(heading).toBeInTheDocument()
    // expect(mockRouterPush).toHaveBeenCalledWith('/')
  })
  it.only('has role input', async () => {
    await setup()
    const candidateRadioButton = screen.getByLabelText('Candidate')
    expect(candidateRadioButton).toBeInTheDocument()

    // Find the employer radio button
    const employerRadioButton = screen.getByLabelText('Employer')
    expect(employerRadioButton).toBeInTheDocument()
  })
  // it.only('has email input required', async () => {
  //   await setup()
  //   // Find the error message associated with the email input field
  //   const errorMessage = screen.queryByTestId('password') // Update with the actual error message
  //   expect(errorMessage).not.toBeInTheDocument()
  // })

  // it('has sign in button', async () => {
  //   await setup()
  //   expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument()
  // })
  // describe('when user submits form with correct data', () => {
  //   it('dispatches appropriate event in the store', async () => {
  //     await setup()
  //     const user = userEvent.setup()
  //     const email = screen.getByPlaceholderText('Email')
  //     const password = screen.getByLabelText('Password')
  //     const signInButton = screen.getByRole('button', { name: 'Sign In' })

  //     await user.type(email, 'abc@gmail.com')
  //     await user.type(password, 'password')

  //     await user.click(signInButton)
  //     expect(mockDispatch).toHaveBeenCalledWith('login', {
  //       email: 'abc@gmail.com',
  //       password: 'password'
  //     })
  //   })
  // })
})
