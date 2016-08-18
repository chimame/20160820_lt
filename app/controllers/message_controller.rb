# -*- coding: utf-8 -*-
class MessageController < ApplicationController
  def index
    render json: {message: "現在時刻:#{Time.now.strftime("%Y/%m/%d %H:%M:%S")}\n２行目のメッセージです。\3ぎょうめ\n4444444"}
  end
end
