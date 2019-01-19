﻿using Microsoft.EntityFrameworkCore;
using server.Helpers;
using server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Data
{
    public class EfRepository<T> : IRepository<T> where T : BaseEntity
    {
        private readonly DataContext _dbContext;
        private readonly DbSet<T> _dbSet;

        public EfRepository(DataContext dbContext)
        {
            _dbContext = dbContext;
            _dbSet = dbContext.Set<T>();
        }

        public async Task<bool> FindByIdAsync(Guid id)
        {
            return await _dbSet.AnyAsync(x => x.Id == id);
        }

        public async Task<T> GetByIdAsync(Guid id)
        {
            return await _dbSet.FindAsync(id);
        }


        public async Task<List<T>> ListAsync(ResourceParameters resource)
        {
            return await _dbSet
            .OrderBy(a => a.Id)
            .Skip(resource.PageSize * (resource.PageNumber - 1))
            .Take(resource.PageSize).ToListAsync();
        }

        public async Task<PagedList<T>> PagedListAsync(ResourceParameters resource)
        {

            var collectionBeforePaging = _dbSet
            .OrderBy(a => a.Id);
            await Task.Delay(0);
            return PagedList<T>.Create(collectionBeforePaging, resource.PageNumber, resource.PageSize);



        }

        public async Task<T> AddAsync(T entity)
        {
            await _dbSet.AddAsync(entity);
            await _dbContext.SaveChangesAsync();
            return entity;
        }

        public async Task UpdateAsync(T entity)
        {
            _dbSet.Update(entity);
            await _dbContext.SaveChangesAsync();
        }

        public async Task UpdateAsync(Guid id, T entity)
        {
            entity.Id = id;
            _dbSet.Update(entity);
            await _dbContext.SaveChangesAsync();
        }


        public async Task DeleteAsync(T entity)
        {
            _dbSet.Remove(entity);
            await _dbContext.SaveChangesAsync();
        }


        public async Task DeleteAsync(Guid id)
        {
            var item = await _dbSet.FindAsync(id);
            _dbSet.Remove(item);
            await _dbContext.SaveChangesAsync();
        }


    }
}