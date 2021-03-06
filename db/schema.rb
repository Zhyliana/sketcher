# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140527220306) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "card_sketch_assignments", force: true do |t|
    t.integer  "sketch_id",     null: false
    t.integer  "white_card_id", null: false
    t.integer  "user_id",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "card_sketch_assignments", ["sketch_id"], name: "index_card_sketch_assignments_on_sketch_id", using: :btree
  add_index "card_sketch_assignments", ["user_id"], name: "index_card_sketch_assignments_on_user_id", using: :btree
  add_index "card_sketch_assignments", ["white_card_id"], name: "index_card_sketch_assignments_on_white_card_id", using: :btree

  create_table "sketches", force: true do |t|
    t.integer  "user_id",            null: false
    t.text     "data_url"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "sketches", ["user_id"], name: "index_sketches_on_user_id", using: :btree

  create_table "user_votes", force: true do |t|
    t.integer "user_id",                   null: false
    t.integer "white_card_id",             null: false
    t.integer "vote_value",    default: 0, null: false
  end

  add_index "user_votes", ["user_id", "white_card_id"], name: "index_user_votes_on_user_id_and_white_card_id", using: :btree
  add_index "user_votes", ["white_card_id", "user_id"], name: "index_user_votes_on_white_card_id_and_user_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  create_table "white_cards", force: true do |t|
    t.string   "body",       null: false
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "white_cards", ["user_id"], name: "index_white_cards_on_user_id", using: :btree

end
