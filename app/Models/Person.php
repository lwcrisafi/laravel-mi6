<?php

namespace App\Models;
use App\Models\Image;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    use HasFactory;

    public function aliases()
    {
        return $this->hasMany(Alias::class);
    }

    public function image()
    {
        return $this->belongsTo(Image::class, 'image_id', 'id');
    }

    public function statuses()
    {
        return $this->belongsTo(Status::class);
    }
}
