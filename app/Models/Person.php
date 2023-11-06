<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    use HasFactory;

    public function aliases()
    {
        return $this->hasMany(Alias::class);
    }

    public function images()
    {
        return $this->belongsTo(Image::class);
    }

    public function statuses()
    {
        return $this->belongsTo(Status::class);
    }
}
