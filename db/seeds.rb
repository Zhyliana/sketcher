User.create!([
  {email: "andrew@guest.com", encrypted_password: "$2a$10$oIGzAW/EbXQNYA5zzD62IugEYx1fS4bup5hKdUhT59JAdtZyfy0Fu", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 1, current_sign_in_at: "2014-05-26 01:04:17", last_sign_in_at: "2014-05-26 01:04:17", current_sign_in_ip: "127.0.0.1", last_sign_in_ip: "127.0.0.1"},
  {email: "demo@gmail.com", encrypted_password: "$2a$10$tjIaJrgIvcGUU/3sS1D/w.aLYSIM8lBfpJb2W6.rC1wwjYcBDRGn2", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 1, current_sign_in_at: "2014-05-25 18:35:09", last_sign_in_at: "2014-05-25 18:35:09", current_sign_in_ip: "127.0.0.1", last_sign_in_ip: "127.0.0.1"},
  {email: "yahooo@guest.com", encrypted_password: "$2a$10$WBKppsZ..LiKEqTQHRZabe.xLfij7PNDAoDL.Ce11Ooeg9lDiGbvi", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 1, current_sign_in_at: "2014-05-28 21:05:08", last_sign_in_at: "2014-05-28 21:05:08", current_sign_in_ip: "127.0.0.1", last_sign_in_ip: "127.0.0.1"}
])
CardSketchAssignment.create!([
  {sketch_id: 1, white_card_id: 2, user_id: 1},
  {sketch_id: 1, white_card_id: 5, user_id: 1},
  {sketch_id: 1, white_card_id: 3, user_id: 1},
  {sketch_id: 2, white_card_id: 2, user_id: 1},
  {sketch_id: 2, white_card_id: 4, user_id: 1},
  {sketch_id: 3, white_card_id: 3, user_id: 1},
  {sketch_id: 1, white_card_id: 6, user_id: 1},
  {sketch_id: 2, white_card_id: 5, user_id: 1},
  {sketch_id: 2, white_card_id: 7, user_id: 1},
  {sketch_id: 2, white_card_id: 6, user_id: 1},
  {sketch_id: 4, white_card_id: 6, user_id: 1},
  {sketch_id: 3, white_card_id: 3, user_id: 1},
])
Sketch.create!([
  {user_id: 1, data_url: nil, image_file_name: "data", image_content_type: "image/png", image_file_size: 10845, image_updated_at: "2014-05-29 20:18:44"},
  {user_id: 1, data_url: nil, image_file_name: "data", image_content_type: "image/png", image_file_size: 13562, image_updated_at: "2014-05-29 20:19:33"},
  {user_id: 1, data_url: nil, image_file_name: "data", image_content_type: "image/png", image_file_size: 10746, image_updated_at: "2014-05-29 20:22:34"},
  {user_id: 1, data_url: nil, image_file_name: "data", image_content_type: "image/png", image_file_size: 14543, image_updated_at: "2014-05-29 20:23:56"}
])
UserVote.create!([
  {user_id: 2, white_card_id: 2, vote_value: 1},
  {user_id: 1, white_card_id: 17, vote_value: 1},
  {user_id: 1, white_card_id: 7, vote_value: 1},
  {user_id: 1, white_card_id: 1, vote_value: 1},
  {user_id: 1, white_card_id: 21, vote_value: 1},
  {user_id: 1, white_card_id: 2, vote_value: 1},
  {user_id: 1, white_card_id: 3, vote_value: 1},
  {user_id: 1, white_card_id: 13, vote_value: 1},
  {user_id: 1, white_card_id: 4, vote_value: 1},
  {user_id: 1, white_card_id: 16, vote_value: 1},
  {user_id: 1, white_card_id: 11, vote_value: 1},
  {user_id: 1, white_card_id: 5, vote_value: 1},
  {user_id: 1, white_card_id: 15, vote_value: 1},
  {user_id: 1, white_card_id: 9, vote_value: 1},
  {user_id: 1, white_card_id: 8, vote_value: 1},
  {user_id: 1, white_card_id: 12, vote_value: 1},
  {user_id: 1, white_card_id: 10, vote_value: 1},
  {user_id: 1, white_card_id: 14, vote_value: 1}
])
WhiteCard.create!([
  {body: "Altar boys.", user_id: 1},
  {body: "I can't stop eating my own hands.", user_id: 1},
  {body: "Smegma.", user_id: 1},
  {body: "Free admission with ewok pelk.", user_id: 1},
  {body: "boohoo", user_id: 1},
  {body: "More boobs than the first half of GoT", user_id: 1},
  {body: "Ice cream at 3am", user_id: 1},
  {body: "Beastlies of the southern wild", user_id: 1},
  {body: "Bukkake buscuits", user_id: 1},
  {body: "Boom! Suck on THOSE nipples.", user_id: 1},
  {body: "Shakalaka", user_id: 1},
  {body: "Penile vitiligo", user_id: 1},
  {body: "WarnaBrotha", user_id: 1},
  {body: "Elf shoes.", user_id: 1},
  {body: "boo you whore", user_id: 1},
  {body: " Beans, beans, the musical fruit.", user_id: 1},
  {body: "The Tenderloin.", user_id: 1},
  {body: "Wonky coins.", user_id: 1},
  {body: "Invading Russia in the winter", user_id: 1},
  {body: "Are we there yet? (x6)", user_id: 1},
  {body: "Taste the rainbow.", user_id: 1},
  {body: "Why was Barney canceled? ", user_id: 1},
  {body: "Got backboned.", user_id: 1},
  {body: "Buttoley butthole", user_id: 1},
  {body: "Loosing my shit appettite. ", user_id: 1},
  {body: "MMM.... donuts", user_id: 1}
])
