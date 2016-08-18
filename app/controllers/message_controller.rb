# -*- coding: utf-8 -*-
class MessageController < ApplicationController
  def index
    render json: {title: "sample", message: "現在時刻:#{Time.now.strftime("%Y/%m/%d %H:%M:%S")}\n２行目のメッセージです。\n3ぎょうめ\n4444444"}
  end
end
