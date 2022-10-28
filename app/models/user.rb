class User < ApplicationRecord
  has_secure_password

  before_validation :ensure_session_token

  validates :email, 
    uniqueness: true, 
    presence: true,
    length: { in: 3..255 }, 
    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 8..255 }, allow_nil: true

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    
    if user && user.authenticate(password)
      return user
    else
      return nil 
    end
  end

  def reset_session_token!
    self.update!(session_token: generate_unique_session_token)
    self.session_token
  end

  private

  def generate_unique_session_token
    loop do
      token = SecureRandom.base64
      break token unless User.exists?(session_token: token)
    end
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end
end
