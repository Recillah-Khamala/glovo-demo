class JsonWebToken
  SECRET = Rails.application.secrets.secret_key_base

  def self.encode(payload)
    JWT.encode(payload, SECRET)
  end

  def self.decode(token)
    body = JWT.decode(token, SECRET)[0]
    HashWithIndifferentAccess.new body
  rescue
    nil
  end
end 