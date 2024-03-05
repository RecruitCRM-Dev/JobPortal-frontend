import { render, screen, waitFor } from '@testing-library/vue'
import CandidateRegistrationForm from '@/views/Auth/CandidateRegister.vue'
import { describe, expect, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

vi.mock('vuex')
vi.mock('vue-router')
const mockToast = vi.fn()
vi.mocked('vue3-toastify', { toast: mockToast })

describe('CandidateRegistrationForm', () => {
  it('calls onSubmit function with valid form data', async () => {
    const mockDispatch = vi.fn()
    const mockRouterPush = vi.fn()

    // Mock the Vuex store
    const mockStore = {
      dispatch: mockDispatch,
      getters: {
        isLoggedIn: false, // Mocking a getter value
        User: { id: 123 } // Mocking another getter value
      }
    }
    vi.mocked(useStore).mockReturnValue(mockStore)

    // Mock the useRouter function
    vi.mocked(useRouter).mockReturnValue({
      push: mockRouterPush
    })

    render(CandidateRegistrationForm, {
      global: {
        stubs: {
          'router-link': true
        }
      }
    })

    const nameInput = screen.getByPlaceholderText('Full name')
    const emailInput = screen.getByPlaceholderText('Email')
    const passwordInput = screen.getByPlaceholderText('Password')
    const confirmPasswordInput = screen.getByPlaceholderText('Confirm password')
    const registerButton = screen.getByRole('button', { name: 'Register' })

    await userEvent.type(nameInput, 'Test User')
    await userEvent.type(emailInput, 'test@example.com')
    await userEvent.type(passwordInput, 'password123')
    await userEvent.type(confirmPasswordInput, 'password123')
    await userEvent.click(registerButton)


    // Ensure that the 'candidateRegister' action is dispatched with the correct payload
    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith('candidateRegister', {
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123',
        password_confirmation: 'password123'
      })
    })

    // Add assertions for other expectations like mockToast and mockRouterPush
  })
})