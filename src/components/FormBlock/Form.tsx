'use client'
import { useFormik, FormikHelpers } from 'formik'
import { FC, useState } from 'react'
import InputMask from 'react-input-mask'
import { Typography, Box, TextField, Backdrop, CircularProgress, Stack } from '@mui/material'
import { formValidationSchema } from '@/schemas/formValidationSchema'
import { lightTheme } from '@/styles/theme'
import { IEmailRequestBody } from '@/models/form.types'
import BlackButton from '@/common/ui-kit/ButtonBlack'
import SubmittedText from './SubmittedText'

const inputStyles = (hasError: boolean) => ({
  width: '100%',
  '& .MuiInputBase-root': {
    color: '#fff',
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '130%',
    fontSize: '18px',
    paddingLeft: '10px',
    borderBottom: 'white',
    '&:hover .MuiInputBase-input::placeholder': {
      color: lightTheme.palette.primary.light
    },
    '&::after': {
      borderBottom: '2px solid #fff'
    },
    '&::before': {
      // Добавлен стиль для ::before
      borderBottom: '1px solid #fff'
    }
  },
  '& .MuiOutlinedInput-root': {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '130%',
    fontSize: '18px',
    transition: 'border 0.4s ease',
    color: '#fff',
    height: '55px',
    borderColor: hasError ? 'error.main' : '#fff',
    '&:hover fieldset': {
      borderColor: hasError ? 'error.main' : lightTheme.palette.primary.light
    },
    '&.Mui-focused fieldset': {
      border: hasError ? '1px solid error.main' : `1px solid ${lightTheme.palette.primary.light}`
    }
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: hasError ? 'error.main' : '#fff'
  },
  '& .MuiInputBase-input::placeholder': {
    fontFamily: 'Helvetica Neue',
    fontSize: '18px',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '130%',
    color: '#FFFFFFCC',
    opacity: 1
  }
})

const Form: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionError, setSubmissionError] = useState<string | null>(null)
  const [showNamePlaceholder, setShowNamePlaceholder] = useState(true)
  const [showEmailPlaceholder, setShowEmailPlaceholder] = useState(true)
  const [showMessagePlaceholder, setShowMessagePlaceholder] = useState(true)

  const formik = useFormik<IEmailRequestBody>({
    initialValues: {
      name: '',
      telephone: '',
      mail: '',
      message: ''
    },
    validationSchema: formValidationSchema,
    onSubmit: async (
      values: IEmailRequestBody,
      { setSubmitting, resetForm }: FormikHelpers<IEmailRequestBody>
    ) => {
      try {
        setIsSubmitting(true)
        const endpoint = '/api/send-email'
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...values
          })
        })

        if (response.ok) {
          localStorage.setItem('userData', JSON.stringify(values))
          resetForm()
          setIsSubmitted(true)
        } else {
          // Если сервер вернул ошибку, считываем текст ошибки и устанавливаем его в состояние
          const errorData = await response.json() // Предполагаем, что сервер возвращает JSON с ошибкой
          setSubmissionError(
            errorData.message || 'Oops! Something went wrong while submitting the form.'
          ) // Устанавливаем сообщение об ошибке
        }
      } catch (error) {
        setSubmissionError('Oops! Something went wrong while submitting the form.')
        console.error('Error submitting form:', error)
      } finally {
        setIsSubmitting(false)
        setSubmitting(false)
      }
    }
  })

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Stack
          sx={{
            maxWidth: '684px',
            width: '100%',
            '@media (max-width: 768px) and (min-width: 481px)': {
              ml: '40px'
            }
          }}
        >
          {isSubmitted ? (
            <Box
              sx={{
                '@media (min-width: 1280px)': {
                  height: '400px',
                  mt: '100px'
                },
                '@media (max-width: 1279px) and (min-width: 993px)': {
                  height: '340px',
                  mt: '70px'
                },
                '@media (max-width: 991px) and (min-width: 769px)': {
                  height: '340px',
                  mt: '70px'
                },
                '@media (max-width: 768px) and (min-width: 481px)': {
                  height: '340px'
                },
                '@media (max-width: 480px)': {
                  height: '467px'
                }
              }}
            >
              <SubmittedText />
            </Box>
          ) : submissionError ? (
            <Typography
              sx={{
                fontFamily: 'Helvetica Neue',
                fontSize: '18px',
                fontWeight: '400',
                fontStyle: 'normal',
                lineHeight: '129%',
                color: 'error.main'
              }}
            >
              {submissionError}
            </Typography>
          ) : (
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              display="flex"
              flexDirection="column"
              gap="20px"
              sx={{
                '@media (max-width: 768px) and (min-width: 481px)': {
                  maxWidth: '476px',
                  width: '100%',
                  alignSelf: 'flex-end'
                }
              }}
            >
              {/* Name Field */}
              <TextField
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onFocus={() => setShowNamePlaceholder(false)}
                id="name"
                name="name"
                type="text"
                placeholder={showNamePlaceholder ? 'Name' : ''}
                variant="standard"
                sx={inputStyles(!!(formik.touched.name && formik.errors.name))}
              />
              {formik.touched.name && formik.errors.name && (
                <Typography
                  color="primary.main"
                  fontSize={{ md: '16px', xs: '9px' }}
                  sx={{ mt: '-15px', paddingLeft: '10px' }}
                >
                  {formik.errors.name}
                </Typography>
              )}

              {/* Email Field */}
              <TextField
                value={formik.values.mail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onFocus={() => setShowEmailPlaceholder(false)}
                id="mail"
                name="mail"
                type="email"
                placeholder={showEmailPlaceholder ? 'Email' : ''}
                variant="standard"
                sx={inputStyles(!!(formik.touched.mail && formik.errors.mail))}
              />
              {formik.touched.mail && formik.errors.mail && (
                <Typography
                  color="primary.main"
                  fontSize={{ md: '16px', xs: '9px' }}
                  sx={{ mt: '-15px', paddingLeft: '10px' }}
                >
                  {formik.errors.mail}
                </Typography>
              )}

              {/* Phone Number Field */}
              <InputMask
                mask="+254 99 999 9999"
                value={formik.values.telephone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="telephone"
                name="telephone"
              >
                {(inputProps) => (
                  <TextField
                    {...inputProps}
                    placeholder="Phone number"
                    variant="standard"
                    sx={inputStyles(!!(formik.touched.telephone && formik.errors.telephone))}
                  />
                )}
              </InputMask>
              {formik.touched.telephone && formik.errors.telephone && (
                <Typography
                  color="primary.main"
                  fontSize={{ md: '16px', xs: '9px' }}
                  sx={{ mt: '-15px', paddingLeft: '10px' }}
                >
                  {formik.errors.telephone}
                </Typography>
              )}

              {/* Message Field */}
              <TextField
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onFocus={() => setShowMessagePlaceholder(false)}
                id="message"
                name="message"
                type="text"
                placeholder={showMessagePlaceholder ? 'Message' : ''}
                variant="standard"
                multiline
                rows={4}
                sx={inputStyles(!!(formik.touched.message && formik.errors.message))}
              />
              {formik.touched.message && formik.errors.message && (
                <Typography
                  color="primary.main"
                  fontSize={{ md: '16px', xs: '9px' }}
                  sx={{ mt: '-15px', paddingLeft: '10px' }}
                >
                  {formik.errors.message}
                </Typography>
              )}

              <BlackButton
                type="submit"
                variant="contained"
                disabled={!formik.isValid || isSubmitting}
                sx={{ marginTop: '30px' }}
              >
                {isSubmitting ? 'Submiting...' : 'Submit'}
              </BlackButton>
            </Box>
          )}
        </Stack>
      </Box>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isSubmitting}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}

export default Form
